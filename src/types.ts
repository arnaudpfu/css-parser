import React from 'react';

export interface StyleInstruction{
    selector: string;
    properties: React.CSSProperties;
}

export interface MediaElementStyle {
    [mediaQuery: string]: StyleInstruction[];
}

export interface psdElementStyle {
    [pseudoElement: string]: Omit<ElementStyle, 'psdElement'>
}

export interface ElementStyle {
    element: HTMLElement;
    instructions: StyleInstruction[];
    media: MediaElementStyle;
    psdElements: psdElementStyle;
}