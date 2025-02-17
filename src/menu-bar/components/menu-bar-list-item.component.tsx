import { MenuBarItemComponent } from "../types";
import { StyledHoverableListItem, StyledListItemContent, StyledListItemLabel } from "./styled";

export const MenuBarListItemComponent: MenuBarItemComponent = ({ title, label, tooltip, disabled, action }) => {
    return <StyledHoverableListItem title={tooltip} disabled={disabled} onClick={action}>
        <StyledListItemContent>
            <span>{title}</span>
            {label && <StyledListItemLabel>{label}</StyledListItemLabel>}
        </StyledListItemContent>
    </StyledHoverableListItem>
}