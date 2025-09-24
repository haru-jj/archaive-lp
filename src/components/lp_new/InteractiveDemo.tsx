'use client';

import { useState, useEffect } from 'react';

interface SearchResult {
  id: string;
  title: string;
  type: 'drawing' | 'document' | 'spec';
  department: string;
  date: string;
  relevance: number;
  preview?: string;
  tags: string[];
}

export default function InteractiveDemo() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedResult, setSelectedResult] = useState<SearchResult | null>(null);
  const [aiResponse, setAiResponse] = useState('');
  const [showAiTyping, setShowAiTyping] = useState(false);

  // サンプルデータベース
  const sampleDatabase: SearchResult[] = [
    {
      id: '001',
      title: 'SUS304_bracket_5mm_Rev3.dwg',
      type: 'drawing',
      department: '設計部',
      date: '2024/01/15',
      relevance: 95,
      preview: '/api/placeholder/200/150',
      tags: ['SUS304', 'ブラケット', '5mm', '最新版']
    },
    {
      id: '002',
      title: 'ブラケット見積書_202401.xlsx',
      type: 'document',
      department: '購買部',
      date: '2024/01/10',
      relevance: 88,
      tags: ['見積書', 'ブラケット', 'SUS304']
    },
    {
      id: '003',
      title: 'SUS304材料仕様書.pdf',
      type: 'spec',
      department: '品質管理部',
      date: '2023/12/20',
      relevance: 82,
      tags: ['SUS304', '仕様書', '材料規格']
    },
    {
      id: '004',
      title: 'bracket_assembly_guide.pdf',
      type: 'document',
      department: '製造部',
      date: '2023/11/30',
      relevance: 75,
      tags: ['組立', 'ブラケット', '作業手順']
    },
    {
      id: '005',
      title: '類似部品_bracket_3mm.dwg',
      type: 'drawing',
      department: '設計部',
      date: '2023/10/15',
      relevance: 70,
      tags: ['ブラケット', '3mm', '類似品']
    }
  ];

  // AI応答パターン
  const aiResponses: { [key: string]: string } = {
    'SUS304': 'SUS304関連の図面と仕様書を5件見つけました。最新版はRev3（2024年1月更新）です。材料の仕様書と見積書も含まれています。',
    'ブラケット': 'ブラケット関連のドキュメントを複数発見しました。5mm厚と3mm厚の2種類があり、組立ガイドも利用可能です。',
    '図面': '設計部門の図面ファイルを検索しました。DWG形式とPDF形式の両方が利用可能です。最新のものから順に表示しています。',
    '見積': '見積書関連のファイルを検索しました。最新の見積書は2024年1月のもので、Excel形式で管理されています。',
    'default': 'ご要望の条件に合致するファイルを検索しました。関連度の高い順に表示しています。追加の絞り込みが必要な場合はお知らせください。'
  };

  // 検索実行
  const executeSearch = () => {
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setSearchResults([]);
    setAiResponse('');
    setShowAiTyping(true);

    // 検索アニメーション
    setTimeout(() => {
      // キーワードに基づくフィルタリング
      const results = sampleDatabase.filter(item => {
        const searchLower = searchQuery.toLowerCase();
        return item.title.toLowerCase().includes(searchLower) ||
               item.tags.some(tag => tag.toLowerCase().includes(searchLower));
      }).sort((a, b) => b.relevance - a.relevance);

      setSearchResults(results.length > 0 ? results : sampleDatabase.slice(0, 3));
      
      // AI応答を選択
      const responseKey = Object.keys(aiResponses).find(key => 
        searchQuery.includes(key)
      ) || 'default';
      
      // タイピングアニメーション
      const response = aiResponses[responseKey];
      let currentText = '';
      const typingSpeed = 30;
      
      response.split('').forEach((char, index) => {
        setTimeout(() => {
          currentText += char;
          setAiResponse(currentText);
          if (index === response.length - 1) {
            setShowAiTyping(false);
          }
        }, index * typingSpeed);
      });

      setIsSearching(false);
    }, 1500);
  };

  // サジェスト機能
  const suggestions = [
    'SUS304 ブラケット 図面',
    '5mm厚 見積書',
    '最新版 設計図',
    '類似部品 検索'
  ];

  // ファイルタイプアイコン
  const getFileIcon = (type: string) => {
    switch (type) {
      case 'drawing':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
          </svg>
        );
      case 'document':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z"/>
          </svg>
        );
      case 'spec':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
      {/* ブラウザヘッダー */}
      <div className="bg-gray-900 h-12 flex items-center px-4">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 bg-gray-800 rounded px-3 py-1 text-gray-400 text-sm">
          https://app.archaive.ai/search
        </div>
      </div>

      {/* アプリケーションヘッダー */}
      <div className="bg-[#37B7C4] text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-2xl font-bold">ARCHAIVE</div>
            <div className="text-sm opacity-80">AI Document Search</div>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <span>製造部 田中様</span>
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="p-6 bg-gray-50 min-h-[500px]">
        {/* 検索バー */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && executeSearch()}
              placeholder="自然な言葉で検索（例：SUS304の5mm厚ブラケット図面）"
              className="flex-1 text-lg outline-none text-gray-700 placeholder-gray-400"
            />
            <button
              onClick={executeSearch}
              className="px-6 py-2 bg-[#37B7C4] text-white rounded-lg hover:bg-[#2a9aa5] transition-colors font-medium"
            >
              検索
            </button>
          </div>
          
          {/* サジェスト */}
          {searchQuery.length === 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs text-gray-500">よく検索される：</span>
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSearchQuery(suggestion);
                    executeSearch();
                  }}
                  className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-[#37B7C4]/10 hover:text-[#37B7C4] transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 検索中インジケーター */}
        {isSearching && (
          <div className="flex items-center justify-center py-8">
            <div className="flex items-center space-x-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#37B7C4]"></div>
              <span className="text-gray-600">AI が最適な結果を検索中...</span>
            </div>
          </div>
        )}

        {/* AI応答 */}
        {aiResponse && (
          <div className="bg-[#37B7C4]/5 rounded-xl p-4 mb-6 border border-[#37B7C4]/20">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-[#37B7C4] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                AI
              </div>
              <div className="flex-1">
                <p className="text-gray-700">{aiResponse}</p>
                {showAiTyping && <span className="animate-pulse">▊</span>}
              </div>
            </div>
          </div>
        )}

        {/* 検索結果 */}
        {searchResults.length > 0 && (
          <div className="space-y-3">
            <div className="text-sm text-gray-500 mb-2">
              {searchResults.length}件の結果が見つかりました
            </div>
            {searchResults.map((result) => (
              <div
                key={result.id}
                onClick={() => setSelectedResult(result)}
                className="bg-white rounded-lg p-4 hover:shadow-md transition-all cursor-pointer border border-gray-100 hover:border-[#37B7C4]/30"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 rounded flex items-center justify-center ${
                      result.type === 'drawing' ? 'bg-blue-100 text-blue-600' :
                      result.type === 'document' ? 'bg-green-100 text-green-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      {getFileIcon(result.type)}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{result.title}</h4>
                      <div className="text-sm text-gray-500 mt-1">
                        {result.department} • {result.date}
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {result.tags.map((tag, index) => (
                          <span key={index} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-[#37B7C4]">
                      関連度: {result.relevance}%
                    </div>
                    <button className="mt-2 text-xs px-3 py-1 bg-[#37B7C4]/10 text-[#37B7C4] rounded hover:bg-[#37B7C4]/20 transition-colors">
                      プレビュー
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 詳細モーダル */}
        {selectedResult && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setSelectedResult(null)}>
            <div className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{selectedResult.title}</h3>
                <button 
                  onClick={() => setSelectedResult(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center mb-4">
                <span className="text-gray-500">ファイルプレビューエリア</span>
              </div>
              <div className="flex justify-end space-x-3">
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                  ダウンロード
                </button>
                <button className="px-4 py-2 bg-[#37B7C4] text-white rounded-lg hover:bg-[#2a9aa5]">
                  開く
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}