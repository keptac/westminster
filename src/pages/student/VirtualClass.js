import { Helmet } from 'react-helmet';
import {
  Box,
  Container,

  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid
} from '@material-ui/core';
import VirtualClassCard from 'src/components/student/virtualclass/VirtualClassCard';
import resources from 'src/__mocks__/liveClasses';

const VirtualClass = () => (
  <>
    <Helmet>
      <title>Settings | Vivid Learn</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 10
      }}
    >

      <Container>
        <Card>
          <CardHeader
            subheader="Ongoing sessions"
            title="Video Classes"
          />
          <Divider />
          <CardContent>
            <Grid
              container
              spacing={3}
            >
              {resources.map((resource) => (
                resource.activeNow ? (
                  <Grid
                    item
                    key={resource.id}
                    lg={4}
                    md={6}
                    xs={12}
                  >
                    <VirtualClassCard resource={resource} />

                  </Grid>
                ) : <></>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  </>
);

export default VirtualClass;
