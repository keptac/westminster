import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';

import TimeTable from 'src/components/student/dashboard/TimeTable';
import MenuBoard from 'src/components/student/StudentMenu';
import LibraryCard from 'src/components/student/library/LibraryCard';
import React from 'react';
import resources from 'src/__mocks__/subjectResources';

class SubjectContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectName: ''
    };
  }

  componentDidMount() {
    this.setState({
      subjectName: 'Shona'
    });
  }

  render() {
    const { subjectName } = this.state;
    return (
      <>
        <Helmet>
          <title>{subjectName}</title>
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
              <Grid>
                <TimeTable />
              </Grid>
              {resources.map((resource) => (
                <Grid
                  item
                  key={resource.id}
                  lg={8}
                  md={12}
                  xl={9}
                  xs={12}
                >
                  <LibraryCard resource={resource} />
                </Grid>
              ))}
              <Grid
                item
                lg={4}
                md={6}
                xl={3}
                xs={12}
              >
                <MenuBoard sx={{ height: '100%' }} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    );
  }
}
export default SubjectContent;
