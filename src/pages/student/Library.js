/* eslint-disable react/prefer-stateless-function */
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Pagination
} from '@material-ui/core';

import LibraryCard from 'src/components/student/library/LibraryCard';
import LibraryToolBar from 'src/components/student/library/LibraryToolbar';
import resources from 'src/__mocks__/resources';
import React from 'react';
import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewDoc: false,
      docs: []
    };
  }

  readDocument() {
    this.setState({
      viewDoc: true,
      docs: [{ uri: 'https://www.youtube.com/watch?v=WdFtSNO2bBg' }]
    });
  }

  render() {
    const { viewDoc } = this.state;
    const { docs } = this.state;
    return (
      <>
        <Helmet>
          <title>Library | Vivid Learn</title>
        </Helmet>
        <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3
          }}
        >
          <Container maxWidth={false}>
            {viewDoc
              ? (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    pt: 3
                  }}
                >

                  <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
                </Box>
              )
              : (
                <>
                  <LibraryToolBar />
                  <Box sx={{ pt: 3 }}>
                    <Grid
                      container
                      spacing={3}
                    >
                      {resources.map((resource) => (
                        <Grid
                          item
                          key={resource.id}
                          lg={4}
                          md={6}
                          xs={12}
                        >
                          <div onClick={() => this.readDocument()} aria-hidden="true">
                            <LibraryCard resource={resource} />
                          </div>
                        </Grid>

                      ))}
                    </Grid>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      pt: 3
                    }}
                  >
                    <Pagination
                      color="primary"
                      count={3}
                      size="small"
                    />
                  </Box>
                </>
              )}
          </Container>
        </Box>
      </>
    );
  }
}

export default Library;
