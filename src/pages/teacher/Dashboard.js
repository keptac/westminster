import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';

import NoticeBoard from 'src/components/NoticeBoard';
import SubjectCard from 'src/components/teacher/subject/SubjectCard';
import React from 'react';

import TeacherServices from '../../services/teacher';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectData: []
    };
  }

  // getAssignments = () => {
  //   StudentService.getAssignments(this.state.assignment.classId)
  //     .then((response) => {
  //       this.setState({ assignments: response }, () => {
  //         let pages = [];
  //         let perPage = 5;
  //         const totalPageCount = Math.ceil(
  //           this.state.assignments.length / perPage
  //         );

  //         for (var i = 1; i <= totalPageCount; i++) {
  //           pages.push(i);
  //         }

  //         const assignments_ = this.pageArraySplit(this.state.assignments, {
  //           currentPageNumber: this.state.currentPageNumber,
  //           perPage,
  //         });
  //         this.setState({ pages, assignments_ });
  //       });
  //     })
  //     .catch((error) => {
  //       M.toast({
  //         html: "Failed to find assignment folder",
  //         classes: "red accent-2",
  //       });
  //       console.log(error);
  //     });
  // };

  componentDidMount() {
    this.getDashData();
  }

  getDashData() {
    TeacherServices.getTeacherClasses('TCM001') // Get all subjects for student
      .then((response) => {
        this.setState({ subjectData: response });
      });
  }

  render() {
    const { subjectData } = this.state;
    return (
      <>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <Box
          sx={{
            // backgroundColor: 'background.default',
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

                <Grid
                  container
                  spacing={3}
                >
                  {subjectData.map((resource) => (
                    <Grid
                      item
                      key={resource.subjectCode}
                      lg={6}
                      md={6}
                      xs={12}
                    >
                      <SubjectCard resource={resource} />
                    </Grid>

                  ))}
                </Grid>
              </Grid>
              <Grid
                item
                lg={4}
                md={6}
                xl={3}
                xs={12}
              >
                <NoticeBoard sx={{ height: '100%' }} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    );
  }
}
export default Dashboard;
