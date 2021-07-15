import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import VideocamIcon from '@material-ui/icons/Videocam';
import LaunchIcon from '@material-ui/icons/Launch';

const VirtualClassCard = ({ resource, ...rest }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'left',
        }}
      >
        <FiberManualRecordIcon color="error" />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >
        <Avatar>
          <VideocamIcon />
        </Avatar>
      </Box>
      <Typography
        align="center"
        gutterBottom
        variant="h4"
      >
        {resource.subject}
      </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <AccessTimeIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            {resource.createdAt}
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <LaunchIcon color="action" />
          <Typography
            color="#00796b"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            Join Class
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Card>
);

VirtualClassCard.propTypes = {
  resource: PropTypes.object.isRequired
};

export default VirtualClassCard;
