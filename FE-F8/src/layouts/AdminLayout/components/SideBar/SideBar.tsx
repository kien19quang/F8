import { Box, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { SvgIconComponent } from '@mui/icons-material';
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/lab';
import AddIcon from '@mui/icons-material/Add';
import TreeItemComponent from 'src/components/Common/TreeItem/TreeItem';
import { useLocation, useNavigate } from 'react-router-dom';
import theme from 'src/utils/theme';
export interface OptionSidebar {
  icon: SvgIconComponent;
  title: string;
  link?: string;
  children?: OptionSidebar[];
}

export const listOptionSiderbar: OptionSidebar[] = [
  {
    icon: AutoStoriesIcon,
    title: 'Courses',
    link: 'course'
    //children: [
    //  { icon: AddIcon, title: 'Create course' },
    //  { icon: AddIcon, title: 'Create tracks' }
    //]
  },
  { icon: MenuBookSharpIcon, title: 'Road map', link: 'roadmap' },
  { icon: NewspaperIcon, title: 'Blog', link: 'blog' }
];

const SideBar = (): JSX.Element => {
  const navigate = useNavigate();
  let nodeId: number = 0;

  const arrLink = useLocation().pathname.split('/');
  const linkActive = arrLink[arrLink.length - 1];

  const handleNavigate = (link?: string) => {
    if (link && link !== linkActive) {
      navigate(`./${link}`);
    }
  };

  const renderTree = (item: OptionSidebar) => {
    nodeId++;
    return (
      <TreeItemComponent
        nodeId={String(nodeId)}
        key={JSON.stringify(item)}
        labelText={item.title}
        Icon={item.icon}
        onClick={() => handleNavigate(item.link)}
        color={theme.palette.primary.main}
        isActive={item.link === linkActive}
        bgColor="#fff"
      >
        {Array.isArray(item.children) ? item.children.map((node) => renderTree(node)) : null}
      </TreeItemComponent>
    );
  };

  return (
    <Box
      width="300px"
      bgcolor="#fdfdfd"
      component="div"
      boxShadow="2px 2px 5px rgb(0 0 0 / 10%)"
      sx={{
        transition: 'all .2s',
        position: 'fixed',
        top: '70px',
        left: 0,
        bottom: 0
      }}
      zIndex={10}
      height="100%"
    >
      <Stack
        sx={{
          padding: '13px 15px 12px',
          whiteSpace: 'nowrap',
          height: '86px',
          background:
            'url(http://training-timesheet.nccsoft.vn/user-img-background.7f354e93c30f9d51fc3a.jpg) no-repeat no-repeat'
        }}
        justifyContent="center"
        position="relative"
      >
        <Stack direction="row" gap="14px">
          <Box
            sx={{
              img: {
                objectFit: 'cover',
                width: '60px',
                height: '60px',
                borderRadius: '50%'
              }
            }}
          >
            <img src="http://training-api-timesheet.nccsoft.vn/avatars/1665043430139_admin_image.jpg" alt="avatar" />
          </Box>

          <Stack justifyContent="center">
            <Typography variant="body1" color="white">
              admin admin
            </Typography>
            <Typography variant="body1" color="white">
              admin@ncc.com
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <TreeView
        sx={{ maxWidth: 400, overflowY: 'auto', flexGrow: '1' }}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {listOptionSiderbar.map((item) => renderTree(item))}
      </TreeView>
    </Box>
  );
};

export default SideBar;
