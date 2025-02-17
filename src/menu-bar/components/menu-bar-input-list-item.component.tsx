import { ChangeEventHandler, useCallback } from "react";
import { MenuBarItemComponent } from "../types";
import { StyledListItem } from "./styled";

export const MenuBarInputListItemComponent: MenuBarItemComponent<string> = ({title, tooltip, disabled, action}) => {
    const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(({ target: { value }}) => action?.(value), [action]);
    
    return <StyledListItem>
        <input placeholder={title} title={tooltip} disabled={disabled} onChange={onChange}/>
    </StyledListItem>
}