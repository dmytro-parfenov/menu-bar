import { MenuBarItemComponent } from "../types";
import { StyledFloatingEndMenu, StyledExpandableListItem, StyledListItemContent, StyledListItemLabel } from "./styled";

export const MenuBarListSubmenuItemComponent: MenuBarItemComponent = ({ title, label, tooltip, disabled, children }) => {
    return Boolean(children?.length) && <StyledExpandableListItem title={tooltip} disabled={disabled}>
        <StyledListItemContent>
            <span>{title}</span>
            {label && <StyledListItemLabel>{label}</StyledListItemLabel>}
            <span>›</span>
        </StyledListItemContent>
        <StyledFloatingEndMenu>
            {children?.map(item => {
                return <item.component key={item.id} {...item.properties} />
            })}
        </StyledFloatingEndMenu>
    </StyledExpandableListItem>
}