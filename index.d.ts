import { Component } from 'react';
// eslint-disable-next-line
import { IOSWebViewProps, AndroidWebViewProps, WebViewMessageEvent, WebViewNavigation } from './lib/WebViewTypes';

export type WebViewProps = IOSWebViewProps & AndroidWebViewProps;

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

    scrollToOffset: () => void;

    setZoomScale: () => void;

    zoomToRect: () => void;
}

export {WebView};
export default WebView;
