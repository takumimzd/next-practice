"use client";

import { Component, ReactNode } from "react";
import { ErrorCard } from "./ErrorCard";

type Props = {
  children: ReactNode;
  title: string;
};

type State = {
  hasError: boolean;
  error: Error | null;
};

/**
 * 個別のErrorBoundary実装
 *
 * 理由:
 * - CachedUsersとNonCachedTodosを個別にエラーハンドリングできる
 * - 一方のAPIが失敗しても、もう一方は正常に表示できる
 * - ページ全体がクラッシュせず、部分的なエラー表示が可能
 */
export class DataErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    console.error(`Error in ${this.props.title}:`, error, errorInfo);
  }

  reset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      return (
        <ErrorCard
          title={this.props.title}
          error={this.state.error}
          reset={this.reset}
        />
      );
    }

    return this.props.children;
  }
}
