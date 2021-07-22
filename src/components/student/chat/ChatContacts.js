import { v4 as uuid } from 'uuid';
import moment from 'moment';
import {
  Avatar,
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
    name: 'Teacher A',
    imageUrl: '/static/images/resources/mtgs.png',
    updatedAt: moment().subtract(2, 'hours'),
    message: 'Schools will be open during th metioned times'
  },
  {
    id: uuid(),
    name: 'Kelvin Chelenje',
    imageUrl: '/static/images/avatars/avatar_1.jpg',
    message: 'As per our last discussion'
  },
];

const ChatContacts = (props) => (
  <Card {...props}>
    <CardHeader
      title={`Contact List (${products.length})`}
    />
    <Divider />
    <List>
      {products.map((announcement, i) => (
        <ListItem
          divider={i < products.length - 1}
          key={announcement.id}
        >
          <ListItemAvatar>
            <Avatar
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
            secondary={`${announcement.message}`}
          />
        </ListItem>
      ))}
    </List>
    <Divider />
  </Card>
);

export default ChatContacts;
