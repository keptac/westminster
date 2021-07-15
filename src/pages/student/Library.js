import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Pagination
} from '@material-ui/core';

import LibraryCard from 'src/components/student/library/LibraryCard';
import resources from 'src/__mocks__/resources';

const Library = () => (
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
                <LibraryCard resource={resource} />
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
      </Container>
    </Box>
  </>
);

export default Library;
