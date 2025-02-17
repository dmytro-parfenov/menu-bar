import { MenuBarItemComponent } from "../types";
import { StyledHorizontalMenu } from "./styled";

export const MenuBarMenuComponent: MenuBarItemComponent = ({children}) => {
    return Boolean(children?.length) && <StyledHorizontalMenu>
        {children?.map(item => {
            return <item.component key={item.id} {...item.properties} />
        })}
    </StyledHorizontalMenu>
}