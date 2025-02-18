import { MenuBarItem } from "./types";

type MenuBarItemCompound = {
    add<ActionPayload>(item: MenuBarItem<ActionPayload>): void;
    delete<ActionPayload>(item: MenuBarItem<ActionPayload>): void;
}

export const compoundMenuBarItem = <ActionPayload>(rootItem: MenuBarItem<ActionPayload>): MenuBarItem<ActionPayload> & MenuBarItemCompound => {
    const children = new Set<MenuBarItem>(rootItem.properties?.children);

    return {
        ...rootItem,
        get properties() {
            return {
                ...rootItem.properties,
                children: Array.from(children)
            }
        },
        add: (item) => children.add(item as MenuBarItem),
        delete: (item) => children.delete(item as MenuBarItem),
    }
}