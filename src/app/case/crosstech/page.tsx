'use client';

import Header from '@/components/lp_new/Header';
import Footer from '@/components/lp_new/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function CrosstechCase() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* インタビューセクション */}
        <div className="interview-section">
          <div className="interview-header">
            <h1>Interview</h1>
            <h2>インタビュー</h2>
          </div>
        </div>

        {/* インタビューコンテンツ */}
        <div className="interview-content-wrapper">
          <div className="interview-content">
            <h3>株式会社クロステック/松田忠明様 ✖️ STAR UP/吉川岳宏</h3>
            <hr />
            <div className="relative w-2/3 h-64 md:h-96 mb-6 mx-auto">
              <Image
                src="/images/matsuda.png"
                alt="Interview Image 1"
                fill
                className="object-cover"
              />
            </div>
            
            <hr />
            
            <h3 className="section-title">東大阪の町工場と京大発スタートアップが協働する理由</h3>
            <hr />
            
            <div className="relative w-2/3 h-64 md:h-96 mb-6 mx-auto">
              <Image
                src="/images/matsuda_2.jpg"
                alt="Interview Image 2"
                fill
                className="object-cover"
              />
            </div>

            <div className="mb-12">
              <p className="interview-question">ー(吉川)STAR UPとの最初の話は受託開発でしたよね。</p>
              <p>(松田様、以下敬称略)そうでしたね。製造業の様々な部分でAIを活用したいのですが、どのようなことが困ってますか、という話を頂きました。そこで、多くのところで図面を探すのに困ってるから、AIで解決できたらいいな、と早速意気投合しましたよね。</p>
            </div>

            <div className="mb-12">
              <p className="interview-question">(吉川)それが今のARCHAIVEにつながっているわけですね。</p>
              <p>(松田)そうそう、話が早かったですよね。まさか初対面であんなに多くのビジョンを語ってくれるとは思いませんでした。面白いものを作りたいという強い考えが両者にあったので、話がとても速く進んだことを覚えています。</p>
            </div>

            <div className="mb-12">
              <p className="interview-question">(吉川)確かにたくさん話させていただきました。その時はSTAR UPにどういう印象を持たれていましたか？</p>
              <p>(松田)人を疑わない人たちだと思いました。私たちは基本自分自身の感性に従って動くんですけど、信頼できるなと感じましたね。<br />
              また、社内での上下の立場の区別が良い意味で少ないと感じました。緒方くん(STAR UP代表取締役)だけでなく、個性的な他のメンバーが面白いと思ったことをみんなで、現場でやっている。そこで多様性が生まれると思います。その多様性っていうところに、私たちの信念とのシンパシーを感じたんですよね。<br />
              というのも、クロステックのロゴのXが浮き出て見えるようになっているのですが、これはスクランブル交差点のイメージなんです。いろんな人が交わっていて、それぞれが違うからこそ、いろいろなものが生まれるし、いろいろなものを組み合わせて、いろいろなことができたらいいということです。そんな多様性を認める私たちの信念とSTAR UPのみなさんの性格が似ているなと。</p>
            </div>

            <div className="mb-12">
              <p className="interview-question">(吉川)そのクロステック様の信念とSTAR UPのスタッフのみんなで現場から生み出したいという想いがすごくフィットしていたのですね。元々相性のいい組み合わせだったのかもしれません。</p>
            </div>

            <div style={{ marginTop: '80px' }}>
              <hr />
            </div>

            <h3 className="section-title">ARCHAIVE導入前の課題と導入後の効果</h3>
            <hr />
            
            <div className="relative w-2/3 h-64 md:h-96 mb-6 mx-auto">
              <Image
                src="/images/matsuda_3.jpg"
                alt="Interview Image 3"
                fill
                className="object-cover"
              />
            </div>

            <div className="mb-12">
              <p className="interview-question">ー(吉川)ARCHAIVEを導入する前の課題は何でしたか？</p>
              <p>(松田)製造の仕事を長く続けて、ある程度発展してくると、図面や案件の管理等が俗人化してきます。すると他の人が見積もり等を見てもどの案件のものかわからないし、加工法もわからない。初めはエクセルで管理していたんですけど、それを調べたりするだけでも時間がかかっていました。さらに、他の案件との抱き合わせなどの理由で安めに見積もりを出していたために、差額が生まれてしまっていました。</p>
            </div>

            <div className="mb-12">
              <p className="interview-question">(吉川)導入後は、どのような効果を実感されましたか？</p>
              <p>(松田)見積・納品書作成・請求業務が図面起点の案件管理により大幅に削減しました。多くの情報をすぐに確認できるため、事務員でも簡単に図面を調べられます。事務員と作業員の業務を分けることができるので、業務全体の効率化にもつながりますよね。作業員も加工法や外注先などを確認して、簡単に作業をすることができます。ノウハウを記載しておけば技術の伝承もすぐにできます。<br />
              また、安めに見積もりを出していたために生まれた差額に関しても先方に的確に返答ができるようになり、1案件あたり40%の機会損失を防いだケースもありました。統合的な案件管理により、持続可能な生産体制を構築できています。</p>
            </div>

            <div style={{ marginTop: '80px' }}>
              <hr />
            </div>

            <h3 className="section-title">製造業へのイメージ</h3>
            <hr />
            
            <div className="relative w-2/3 h-64 md:h-96 mb-6 mx-auto">
              <Image
                src="/images/matsuda_4.jpg"
                alt="Interview Image 4"
                fill
                className="object-cover"
              />
            </div>

            <div className="mb-12">
              <p className="interview-question">ー(吉川)製造業にはどのようなイメージを抱かれていますか？</p>
              <p>(松田)中間層（40代・50代の技術者）が減少してきているので、何処に依頼すれば良いか分からない状況があったりしますね。近年では、年金をもらっている高齢者が低価格で仕事を受けていたり、スピードを売りにした海外への発注が高価格であったりと、価格の問題も起きていると感じます。<br />
              あとは、DXが進んでいるとは言っても紙媒体が多いです。特に町工場の場合お互いに共存して生きて、互いに助け合ってきているから、1社だけにDXのような変化があっても効果が薄い。みんながある程度理解して、みんなが成長していかないと全体が上がってこないという感覚があります。じわじわっと右肩下がりになってきて、だんだん問題が顕在化してきている時代なのかなっていうのはすごい思いますね。</p>
            </div>

            <div className="mb-12">
              <p className="interview-question">(吉川)全体の成長が大切なのですね。現場に寄り添い、次に地域に寄り添う。それを東海北陸、関西と繰り返していくとそれが日本に寄り添っていることになる、いわばボトムアップの精神を大切にしようと思います。</p>
              <p>(松田)STAR UPさんは今はソフトウェアAIの会社ですけど、次は現場のハードウェアだったりとかに踏み出していくのか。スマートファクトリーだったりっていうのが今すごい言われてますけど、それはそれとして、京都、東大阪発でやっていける、日本のスタートアップとしてやっていって欲しいなと思います。</p>
            </div>

            <div style={{ marginTop: '80px' }}>
              <hr />
            </div>

            <h3 className="section-title">STAR UPの現状の印象と今後への期待</h3>
            <hr />
            
            <div className="relative w-2/3 h-64 md:h-96 mb-6 mx-auto">
              <Image
                src="/images/matsuda_5.jpg"
                alt="Interview Image 5"
                fill
                className="object-cover"
              />
            </div>

            <div className="mb-12">
              <p className="interview-question">ー(吉川)現在は、STAR UPにはどのような印象を抱かれていますか？</p>
              <p>(松田)環境や周囲への決めつけが少ないことがいいなと思います。製造業そのものへの決めつけだけでなく、周囲の人間の印象や性格の決めつけも少ないと感じることが多くありますね。</p>
            </div>

            <div className="mb-12">
              <p className="interview-question">(吉川)それがあるから、いわばほぼゼロだった製造業の経験を短時間でキャッチアップしていけたのかもしれませんね。それは確かに「決めつけないこと」と「現場理解」、「現場に対する思い」が大きいかもしれません。</p>
              <p>(松田)そうですね。対応の面でも、STAR UPのメンバーはこちら側の質問に対して真摯に答えてくれます。こちらの言ったことを理解して、それに対して適切な答えを解決してくれるので、とても安心して利用できています。</p>
            </div>

            <div className="mb-12">
              <p className="interview-question">(吉川)ありがとうございます。最後に、今後のSTAR UPへの期待を教えてください。</p>
              <p>(松田)もっといろんなことを楽しくして欲しいなと思います。今だと、ARCHAIVEを使って時間を作るということは、工場の働いてることを楽しくすることだと思うんですよ。時間を作っていろんなことを覚えて、自分のスキルが上がっていけば、仕事してるのも楽しくなる。訳がわからないまま仕事してるよりも、理由がわかって仕事してる方が絶対楽しいし、自分たちが成長してる実感も出てくるし、そのためにやっぱり時間というのがすごく必要だと思います。</p>
            </div>

            <div className="mb-12">
              <p className="interview-question">(吉川)なるほど、もっと色々な新しいことに踏み出していこうと思います。そこに絶対ITは存在するし、それをシステムに落とし込む人間が必要になってくるので、そんな手伝いがSTAR UPとしてできたらなと。</p>
              <p>(松田)そうですね。今やっていることだけではなくて、これからも見据えて頑張ってほしいなと思います。</p>
            </div>

            <hr />

            {/* 企業情報 */}
            <div className="company-info">
              <h3 className="text-xl font-bold mb-6">株式会社クロステック</h3>
              <div>
                <p><strong>代表取締役：</strong>松田忠明</p>
                <p><strong>所在地：</strong>大阪府東大阪市加納4-5-52</p>
                <p className="mt-4">必要とするモノを必要としているヒトへ、ツナグ技術を対話の中から常に追い求め、モノを手にした人が物心一如になるように、自分たちの周りにあるすべてのモノ、ヒトに感謝を忘れずに造るを極める。それを、次世代にツナグ。<br />
                そんな『ヒトとモノをツナグ技術』を追求する集団として、ワイヤー放電加工やコーディネイト等を行っている。</p>
                <p className="mt-2"><strong>会社HP：</strong><a href="https://www.crosstech.osaka/" target="_blank" rel="noopener noreferrer">https://www.crosstech.osaka/</a></p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      
      <style jsx>{`
        .interview-section {
          background-color: #37B7C4;
          padding: 60px 20px 40px;
          text-align: center;
        }

        .interview-header h1 {
          font-size: 48px;
          color: white;
          margin: 0;
        }

        .interview-header h2 {
          font-size: 24px;
          color: white;
          margin: 0;
        }

        .interview-content-wrapper {
          background-color: #37B7C4;
          margin: 0;
          padding: 40px 20px 60px;
        }

        .interview-content {
          background-color: white;
          padding: 60px 80px;
          text-align: left;
          max-width: 1200px;
          margin: 0 auto;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .interview-content h3 {
          font-size: 20px;
          font-weight: bold;
          margin: 0 0 10px;
          text-align: center;
        }

        .interview-content hr {
          border: none;
          border-top: 1px solid #333;
          margin: 30px 0;
        }

        .interview-content img {
          width: 100%;
          height: auto;
          margin-bottom: 20px;
        }

        .interview-content p {
          font-size: 16px;
          color: #333;
          margin: 15px 0;
          line-height: 1.8;
        }

        .interview-question {
          color: #37B7C4;
          margin-top: 30px;
        }

        .section-title {
          font-size: 18px;
          font-weight: bold;
          color: #333;
          text-align: center;
          margin: 80px 0 20px;
        }

        .company-info {
          margin-top: 60px;
          padding: 30px;
          background-color: white;
          border-radius: 8px;
          border: 1px solid #e5e5e5;
        }

        .company-info h3 {
          margin: 0 0 16px 0;
        }

        .company-info p {
          margin: 5px 0;
        }

        .company-info a {
          color: #37B7C4;
          text-decoration: none;
        }

        .company-info a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}