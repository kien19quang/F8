import { SvgIconComponent } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import EmojiObjectsRoundedIcon from '@mui/icons-material/EmojiObjectsRounded';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Box, Stack, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { IconAdd, SideBarItem } from './SideBarStyles';

export interface SideBarProps {}

export interface sideBarItem {
  title: string;
  icon: SvgIconComponent;
  link: string;
}

const listSidebarItem: sideBarItem[] = [
  { title: 'Home', icon: HomeIcon, link: '/' },
  { title: 'Lộ trình', icon: MenuBookSharpIcon, link: '/road-map' },
  { title: 'Học', icon: EmojiObjectsRoundedIcon, link: '/study' },
  { title: 'Blog', icon: NewspaperIcon, link: '/blog' }
];

export default function SiderBar(props: SideBarProps) {
  const navigate = useNavigate();
  const pathName = useLocation().pathname;

  const handleNavigateItem = (link: string): void => {
    if (link !== pathName) {
      navigate(`${link}`);
    }
  };

  return (
    <Stack
      width="96px"
      alignItems="center"
      padding="0 8px"
      position="fixed"
      zIndex="10"
      sx={{ left: '0', top: '74px' }}
    >
      <Box pb="12px">
        <IconAdd>
          <AddIcon />
        </IconAdd>
      </Box>

      <Stack>
        {listSidebarItem.map((item) => {
          return (
            <SideBarItem
              className={item.link === pathName ? 'active' : ''}
              key={JSON.stringify(item)}
              onClick={() => handleNavigateItem(item.link)}
            >
              <item.icon />
              <Typography variant="body1" color="initial" fontSize="12px" fontWeight="600">
                {item.title}
              </Typography>
            </SideBarItem>
          );
        })}
      </Stack>
    </Stack>
  );
}
