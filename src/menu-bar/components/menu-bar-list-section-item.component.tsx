import { MenuBarItemComponent } from "../types";

export const MenuBarListSectionItemComponent: MenuBarItemComponent = ({ children }) => {
    return Boolean(children?.length) && <>
        <hr />
        {children?.map(item => {
            return <item.component key={item.id} {...item.properties} />
        })}
        <hr />
    </>
}