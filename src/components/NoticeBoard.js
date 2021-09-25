import { v4 as uuid } from 'uuid';
import moment from 'moment';
import {
  Card,
  CardHeader,
  Divider,

  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';

const products = [
  {
    id: uuid(),
    name: 'General',
    imageUrl: '/static/images/resources/westminster.png',
    updatedAt: moment().subtract(2, 'hours'),
    message: 'Schools will be open during th metioned times'
  },
  {
    id: uuid(),
    name: 'Public Notice',
    imageUrl: '/static/images/resources/westminster.png',
    updatedAt: moment().subtract(3, 'hours'),
    message: 'Schools will be open during th metioned times such as these'
  },
];

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
              alt={announcement.name}
              src={announcement.imageUrl}
              style={{
                height: 48,
                width: 48
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={announcement.name}
            secondary={`Updated ${announcement.message}`}
          />
        </ListItem>
      ))}
    </List>
    <Divider />
  </Card>
);

export default NoticeBoard;
