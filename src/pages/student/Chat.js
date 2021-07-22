import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';

import ChatArea from 'src/components/student/chat/ChatArea';
import ChatContacts from 'src/components/student/chat/ChatContacts';
import { Search as SearchIcon } from 'react-feather';
import React from 'react';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Chat</title>
        </Helmet>
        <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3
          }}
        >
          <Container maxWidth={false}>
            <Grid
              container
              spacing={3}
              sx={{ marginTop: '0.1%' }}
            >
              <Grid
                item
                lg={8}
                md={12}
                xl={9}
                xs={12}
              >
                <ChatArea />
              </Grid>
              <Grid
                item
                lg={4}
                md={6}
                xl={3}
                xs={12}
              >
                <Grid
                  item
                  lg={12}
                  md={12}
                  xl={12}
                  xs={12}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end'
                    }}
                  >
                    <TextField
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SvgIcon
                              fontSize="small"
                              color="action"
                            >
                              <SearchIcon />
                            </SvgIcon>
                          </InputAdornment>
                        )
                      }}
                      placeholder="Search Name"
                      variant="outlined"
                    />
                  </Box>
                </Grid>
                <><br /></>
                <ChatContacts sx={{ height: '100%' }} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    );
  }
}
export default Chat;
