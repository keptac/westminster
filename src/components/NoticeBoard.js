import {
  Card,
  CardHeader,
  Divider,

  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';

import notices from 'src/__mocks__/notices';

const products = notices;

const NoticeBoard = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${products.length} in total`}
      title="Notice Board"
    />
    <Divider />
    <List>
      {products.map((announcement, i) => (
        <ListItem
          divider={i < products.length - 1}
          key={announcement.id}
        >
          <ListItemAvatar>
            <img
              alt={announcement.noticeTitle}
              src={announcement.imageUrl}
              style={{
                height: 48,
                width: 48
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={announcement.noticeTitle}
            secondary={`Updated ${announcement.noticeBody}`}
          />
        </ListItem>
      ))}
    </List>
    <Divider />
  </Card>
);

export default NoticeBoard;
