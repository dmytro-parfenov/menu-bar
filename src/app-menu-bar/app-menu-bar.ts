import { MenuBarInputListItemComponent } from "../menu-bar/components/menu-bar-input-list-item.component";
import { MenuBarListItemComponent } from "../menu-bar/components/menu-bar-list-item.component";
import { MenuBarListSectionItemComponent } from "../menu-bar/components/menu-bar-list-section-item.component";
import { MenuBarListSubmenuItemComponent } from "../menu-bar/components/menu-bar-list-submenu-item.component";
import { MenuBarMenuItemComponent } from "../menu-bar/components/menu-bar-menu-item.component";
import { MenuBarMenuComponent } from "../menu-bar/components/menu-bar-menu.component";
import { compoundMenuBarItemFactory } from "../menu-bar/compound-menu-bar-item-factory";
import { v4 } from "uuid";

/**
 * File
 */
const file = compoundMenuBarItemFactory({
    id: v4(),
    properties: {
        title: '📁 File'
    },
    component: MenuBarMenuItemComponent
});
file.add({
    id: v4(),
    properties: {
        title: 'New',
        action: () => console.log('Create new'),
    },
    component: MenuBarListItemComponent
})
file.add({
    id: v4(),
    properties: {
        title: 'Open',
        label: '⌘ O'
    },
    component: MenuBarListItemComponent
})
file.add({
    id: v4(),
    properties: {
        title: 'Search',
        action: (value) => console.log('Search value changed', value),
    },
    component: MenuBarInputListItemComponent
})
file.add({
    id: v4(),
    properties: {
        title: '💾 Save'
    },
    component: MenuBarListItemComponent
})

const download = compoundMenuBarItemFactory({
    id: v4(),
    properties: {
        title: `Download`,
        label: '›'
    },
    component: MenuBarListSubmenuItemComponent
});

const microsoftWord = compoundMenuBarItemFactory({
    id: v4(),
    properties: {
        title: `Microsoft Word`,
        label: '›'
    },
    component: MenuBarListSubmenuItemComponent
});
microsoftWord.add({
    id: v4(),
    properties: {
        title: `.doc`
    },
    component: MenuBarListItemComponent
})
microsoftWord.add({
    id: v4(),
    properties: {
        title: `.docx`
    },
    component: MenuBarListItemComponent
})

download.add(microsoftWord)
download.add({
    id: v4(),
    properties: {
        title: `.pdf`
    },
    component: MenuBarListItemComponent
})

const downloadSection = compoundMenuBarItemFactory({
    id: v4(),
    component: MenuBarListSectionItemComponent
});

downloadSection.add(download);

file.add(downloadSection)
file.add({
    id: v4(),
    properties: {
        title: `Details`
    },
    component: MenuBarListItemComponent
});
file.add({
    id: v4(),
    properties: {
        title: `🗑️ Delete`
    },
    component: MenuBarListItemComponent
})

const versionHistory = compoundMenuBarItemFactory({
    id: v4(),
    properties: {
        title: `Version history`,
        label: '›',
        disabled: true
    },
    component: MenuBarListSubmenuItemComponent
});

versionHistory.add({
    id: v4(),
    properties: {
        title: `Version 1`
    },
    component: MenuBarListItemComponent
})
versionHistory.add({
    id: v4(),
    properties: {
        title: `Version 2`
    },
    component: MenuBarListItemComponent
})

file.add(versionHistory);
file.add({
    id: v4(),
    properties: {
        title: `🖨️ Print`
    },
    component: MenuBarListItemComponent
});

/**
 * Edit
 */
const edit = compoundMenuBarItemFactory({
    id: v4(),
    properties: {
        title: 'Edit'
    },
    component: MenuBarMenuItemComponent
});

edit.add({
    id: v4(),
    properties: {
        title: `↩️ Undo`
    },
    component: MenuBarListItemComponent
})
edit.add({
    id: v4(),
    properties: {
        title: `↪️ Redo`,
        disabled: true
    },
    component: MenuBarListItemComponent
})


const cutSection = compoundMenuBarItemFactory({
    id: v4(),
    component: MenuBarListSectionItemComponent
});

cutSection.add({
    id: v4(),
    properties: {
        title: `✂️ Cut`
    },
    component: MenuBarListItemComponent
})

edit.add(cutSection);

/**
 * View
 */
const view = compoundMenuBarItemFactory({
    id: v4(),
    properties: {
        title: 'View'
    },
    component: MenuBarMenuItemComponent
});

const mode = compoundMenuBarItemFactory({
    id: v4(),
    properties: {
        title: `✏️ Mode`,
        label: '›',
        tooltip: `Please choose the mode you would like to use`
    },
    component: MenuBarListSubmenuItemComponent
});
mode.add({
    id: v4(),
    properties: {
        title: `Editing`
    },
    component: MenuBarListItemComponent
})
mode.add({
    id: v4(),
    properties: {
        title: `🙋 Suggesting`
    },
    component: MenuBarListItemComponent
})

view.add(mode);

const optionsSection = compoundMenuBarItemFactory({
    id: v4(),
    component: MenuBarListSectionItemComponent
});

optionsSection.add({
    id: v4(),
    properties: {
        title: `Pages`
    },
    component: MenuBarListItemComponent
})
optionsSection.add({
    id: v4(),
    properties: {
        title: `Comments`
    },
    component: MenuBarListItemComponent
})

view.add(optionsSection)
view.add({
    id: v4(),
    properties: {
        title: `🖥️ Fullscreen`
    },
    component: MenuBarListItemComponent
})

/**
 * Window
 */
const window = compoundMenuBarItemFactory({
    id: v4(),
    properties: {
        title: 'Window',
        disabled: true,
    },
    component: MenuBarMenuItemComponent
});

window.add({
    id: v4(),
    properties: {
        title: `Minimize`
    },
    component: MenuBarListItemComponent
})
window.add({
    id: v4(),
    properties: {
        title: `Zoom`
    },
    component: MenuBarListItemComponent
})

/**
 * Help
 */
const help = compoundMenuBarItemFactory({
    id: v4(),
    properties: {
        title: 'Help'
    },
    component: MenuBarMenuItemComponent
});

const aboutSection = compoundMenuBarItemFactory({
    id: v4(),
    component: MenuBarListSectionItemComponent
});

aboutSection.add({
    id: v4(),
    properties: {
        title: `About`
    },
    component: MenuBarListItemComponent
});

help.add(aboutSection)
help.add({
    id: v4(),
    properties: {
        title: `Ask a question`,
        disabled: true
    },
    component: MenuBarInputListItemComponent
})
help.add({
    id: v4(),
    properties: {
        title: `Report an issue...`
    },
    component: MenuBarListItemComponent
})


/**
 * Menu bar
 */
export const appMenuBar = compoundMenuBarItemFactory({
    id: v4(),
    component: MenuBarMenuComponent
});

appMenuBar.add(file);
appMenuBar.add(edit);
appMenuBar.add(view);
appMenuBar.add(window);
appMenuBar.add(help);