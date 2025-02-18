import { MenuBarItemComponent } from "../types";
import { StyledListItem, StyledListItemContent, StyledListItemLabel } from "./styled";

export const MenuBarListSectionItemComponent: MenuBarItemComponent = ({ children, title, label }) => {
    return Boolean(children?.length) && <>
        <hr />
        {title && <StyledListItem disabled>
            <StyledListItemContent>
                <span>{title}</span>
                {label && <StyledListItemLabel>{label}</StyledListItemLabel>}
            </StyledListItemContent>
        </StyledListItem>}
        {children?.map(item => {
            return <item.component key={item.id} {...item.properties} />
        })}
        <hr />
    </>
}