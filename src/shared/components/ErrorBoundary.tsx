"use client";

import React, { Component, ReactNode } from 'react';
import GlobalError from '@/app/global-error';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode; // Thêm prop fallback để nhận component dự phòng
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Cập nhật state để hiển thị giao diện dự phòng
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Bạn có thể ghi lại lỗi vào một dịch vụ log lỗi
    console.error("Uncaught error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      // Render component dự phòng được truyền qua prop fallback
      if (this.props.fallback) {
        return React.cloneElement(this.props.fallback as React.ReactElement, {
          error: this.state.error,
          reset: this.handleReset,
        });
      }
      return <GlobalError error={this.state.error!} reset={this.handleReset} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;