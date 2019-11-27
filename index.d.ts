import { Component } from 'react';
// eslint-disable-next-line
import { IOSWebViewProps, AndroidWebViewProps, WebViewMessageEvent, WebViewNavigation, WebViewErrorEvent, WebViewNativeConfig } from './lib/WebViewTypes';

export type WebViewProps = IOSWebViewProps & AndroidWebViewProps;
export type WebViewErrorEvent = WebViewErrorEvent;
export type WebViewMessageEvent = WebViewMessageEvent;
export type WebViewNativeConfig = WebViewNativeConfig;
declare class WebView extends Component<WebViewProps> {
    /**
     * Go back one page in the webview's history.
     */
    goBack: () => void;

    /**
     * Go forward one page in the webview's history.
     */
    goForward: () => void;

    /**
     * Reloads the current page.
     */
    reload: () => void;

    /**
     * Stop loading the current page.
     */
    stopLoading: () => void;

    /**
     * Extra Native Component Config.
     */
    extraNativeComponentConfig: () => void;

    /**
     * Executes the JavaScript string.
     */
    injectJavaScript: (script: string) => void;

    /**
     * Focuses on WebView redered page.
     */
    requestFocus: () => void;

    scrollToOffset: (x: number, y: number, animated: boolean) => void;

    setZoomScale: (scale: number, animated: boolean) => void;

    zoomToRect: (rect: {x: number, y: number, width: number, height: number}, scale: number, animated: boolean) => void;
}

export {WebView};
export default WebView;
