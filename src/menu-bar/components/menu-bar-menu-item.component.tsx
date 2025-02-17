import { MenuBarItemComponent } from "../types";
import { StyledFloatingBottomMenu, StyledExpandableListItem } from "./styled";

export const MenuBarMenuItemComponent: MenuBarItemComponent = ({title, tooltip, children, disabled }) => {
    return Boolean(children?.length) && <StyledExpandableListItem title={tooltip} disabled={disabled}>
        {title}
        <StyledFloatingBottomMenu>
            {children?.map(item => {
                return <item.component key={item.id} {...item.properties} />
            })}
        </StyledFloatingBottomMenu>
    </StyledExpandableListItem>
}