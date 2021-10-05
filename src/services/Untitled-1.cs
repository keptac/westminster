                      
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>
                              Notice Title
                            </TableCell>
                            <TableCell>
                              Notice Message
                            </TableCell>
                            <TableCell>
                              Notice Date
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {notices.slice(0, limit).map((notice) => (
                            <TableRow
                              hover
                              key={notice.id}
                            >
                              <TableCell>
                                <Box
                                  sx={{
                                    alignItems: 'center',
                                    display: 'flex'
                                  }}
                                >
                                  <Typography
                                    color="textPrimary"
                                    variant="body1"
                                  >
                                    {`${notice.noticeTitle}` }
                                  </Typography>
                                </Box>
                              </TableCell>
                              <TableCell>
                                {`${notice.noticeBody}`}
                              </TableCell>
                              <TableCell>
                                {`${notice.updatedAt}`}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                   