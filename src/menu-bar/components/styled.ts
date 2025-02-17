import styled, { css } from "styled-components";

export const StyledMenu = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;

    hr:first-child {
        display: none
    }

    hr:last-child {
        display: none
    }
`;

export const StyledHorizontalMenu = styled(StyledMenu)`
    display: flex;
    background: light-dark(#f5f7fd, #171f2b);
`;

export const StyledFloatingMenu = styled(StyledMenu)`
    position: absolute;
    display: none;
    padding: 4px;
    border: 1px solid rgba(118, 118, 118, 0.16);
    border-radius: var(--main-border-radius);
    background: var(--main-background-color);
    box-shadow: var(--main-box-shadow);
`;

export const StyledFloatingBottomMenu = styled(StyledFloatingMenu)`
    left: 0;
    top: 100%;
`;

export const StyledFloatingEndMenu = styled(StyledFloatingMenu)`
    left: 100%;
    top: 0;
`;

type StyledListItemProps = {
    disabled?: boolean;
}

export const StyledListItem = styled.li<StyledListItemProps>`
    padding: 2px 8px;
    border-radius: var(--main-border-radius);
    cursor: default;
    text-wrap: nowrap;

    ${({disabled}) => disabled && css`
        pointer-events: none;
        color: var(--main-color-disabled);
    `}
`;

export const StyledHoverableListItem = styled(StyledListItem)`
    &:hover {
        background-color: var(--list-item-hover-background-color);
    }
`;

export const StyledExpandableListItem = styled(StyledHoverableListItem)`
    position: relative;

    &:hover > ${StyledFloatingMenu} {
        display: block;
    }
`;

export const StyledListItemContent = styled.div`
    display: flex;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
`;

export const StyledListItemLabel = styled.span`
    background: light-dark(#e7ebf2, #333e4f);
    border-radius: 4px;
    padding: 2px 4px;
    line-height: 100%;
`
