import { MenuBarItem, CompoundMenuBarItem } from "./types";

export const compoundMenuBarItemFactory = <ActionPayload>(item: MenuBarItem<ActionPayload>): CompoundMenuBarItem<ActionPayload> => {
    const children = new Set<MenuBarItem>(item.properties?.children);

    return {
        ...item,
        get properties() {
            return {
                ...item.properties,
                children: Array.from(children)
            }
        },
        add: (item) => children.add(item as MenuBarItem),
        delete: (item) => children.delete(item as MenuBarItem),
    }
}