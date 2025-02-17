import { ComponentType } from "react";

export interface MenuBarItemProperties<ActionPayload = unknown> {
    readonly title?: string;
    readonly label?: string;
    readonly tooltip?: string;
    readonly disabled?: boolean;
    readonly children?: ReadonlyArray<MenuBarItem>;
    readonly action?: (payload?: ActionPayload) => void;
}

export type MenuBarItemComponent<ActionPayload = unknown> = ComponentType<MenuBarItemProperties<ActionPayload>>;

export interface MenuBarItem<ActionPayload = unknown> {
    readonly id: string;
    readonly properties?: MenuBarItemProperties<ActionPayload>;
    readonly component: MenuBarItemComponent<ActionPayload>;
}

export interface CompoundMenuBarItem<ActionPayload = unknown> extends MenuBarItem<ActionPayload> {
    add<ActionPayload = unknown>(item: MenuBarItem<ActionPayload>): void;
    delete<ActionPayload = unknown>(item: MenuBarItem<ActionPayload>): void;
}