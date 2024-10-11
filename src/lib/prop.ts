import React from "react";

export type MoreItemProp = {
    moreItemsRef: any
    theme: any
    scrollToSection: any
}

export interface SkillItem {
    id: number;
    icon: React.ReactNode;
    title: string;
    skills: string[];
  }