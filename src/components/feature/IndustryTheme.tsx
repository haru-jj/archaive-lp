'use client';

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';

export const industryTabs = ['製造業の方へ', '建設業の方へ'] as const;
export type IndustryTab = (typeof industryTabs)[number];

export type IndustryPalette = {
  primary: string;
  primaryStrong: string;
  primaryDeep: string;
  primarySoft: string;
  primarySurface: string;
  primaryBorder: string;
};

export const industryPalettes: Record<IndustryTab, IndustryPalette> = {
  '製造業の方へ': {
    primary: '#55bdcf',
    primaryStrong: '#39afc3',
    primaryDeep: '#126f7d',
    primarySoft: '#e6f7fa',
    primarySurface: '#f2fbfd',
    primaryBorder: '#bfe5ec',
  },
  '建設業の方へ': {
    primary: '#9AC138',
    primaryStrong: '#85A72F',
    primaryDeep: '#4F6A14',
    primarySoft: '#ECF5DB',
    primarySurface: '#F4F9E8',
    primaryBorder: '#D2E2A4',
  },
};

type IndustryThemeContextValue = {
  selectedIndustry: IndustryTab;
  setSelectedIndustry: (industry: IndustryTab) => void;
  palette: IndustryPalette;
};

const IndustryThemeContext = createContext<IndustryThemeContextValue | null>(
  null,
);

export function IndustryThemeProvider({ children }: { children: ReactNode }) {
  const [selectedIndustry, setSelectedIndustry] =
    useState<IndustryTab>('製造業の方へ');
  const palette = industryPalettes[selectedIndustry];

  return (
    <IndustryThemeContext.Provider
      value={{ selectedIndustry, setSelectedIndustry, palette }}
    >
      {children}
    </IndustryThemeContext.Provider>
  );
}

export function useIndustryTheme(): IndustryThemeContextValue {
  const ctx = useContext(IndustryThemeContext);
  if (!ctx) {
    throw new Error(
      'useIndustryTheme must be used within an IndustryThemeProvider',
    );
  }
  return ctx;
}
