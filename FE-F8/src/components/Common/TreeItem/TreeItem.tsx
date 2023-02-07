import { SvgIconComponent } from '@mui/icons-material';
import { TreeItem, treeItemClasses, TreeItemProps } from '@mui/lab';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material';

export interface TreeItemComponentProps extends TreeItemProps {
  bgColor?: string;
  color?: string;
  Icon: SvgIconComponent;
  labelInfo?: string;
  labelText: string;
  isActive?: boolean;
}

declare module 'react' {
  interface CSSProperties {
    '--tree-view-color'?: string;
    '--tree-view-bg-color'?: string;
  }
}

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '&.Mui-expanded': {
      fontWeight: theme.typography.fontWeightRegular
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover
    },
    '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: 'var(--tree-view-color)'
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: 'inherit',
      color: 'inherit'
    }
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2)
    }
  }
}));

export default function TreeItemComponent(props: TreeItemComponentProps) {
  const { bgColor, color, Icon, labelInfo, labelText, isActive = false, ...other } = props;
  return (
    <StyledTreeItemRoot
      label={
        <Stack
          direction="row"
          alignItems="center"
          padding="5px 16px"
          color={`${isActive ? 'primary.main' : '#747474'}`}
          height="44px"
          gap="16px"
          sx={{ cursor: 'pointer' }}
        >
          <Icon />
          <Typography variant="body1" color={`${isActive ? 'primary.main' : '#333'}`} fontWeight="bold" fontSize="16px">
            {labelText}
          </Typography>
        </Stack>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor
      }}
      {...other}
    />
  );
}
