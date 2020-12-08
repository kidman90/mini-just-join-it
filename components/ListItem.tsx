import * as React from 'react';

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Theme,
  Typography,
  createStyles,
  makeStyles
} from '@material-ui/core';

import { IOffer } from '../interfaces';
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      cursor: 'pointer'
    },
    cardContent: {
      paddingTop: 0
    },
    chip: {
      fontSize: '10px',
      marginRight: theme.spacing(0.5)
    }
  })
);

type ListItemProps = {
  data: IOffer;
};

export const ListItem = ({ data }: ListItemProps) => {
  const classes = useStyles();

  return (
    <Link href="/[category]/[id]" as={`/${data.marker_icon}/${data.id}`}>
      <Grid item xs={6} sm={4} md={3}>
        <Card className={classes.card}>
          <CardHeader
            avatar={<Avatar src={data.company_logo_url} />}
            title={data.title}
            subheader={`${data.company_name}, ${data.city}`}
          />
          <CardContent className={classes.cardContent}>
            <Typography variant="subtitle1" component="h4">
              {data.salary_from} - {data.salary_to} {data.salary_currency}
            </Typography>
            {data.skills.map((skill, index) => (
              <Chip
                key={index}
                label={skill.name}
                size="small"
                avatar={<Avatar>{skill.level}</Avatar>}
                className={classes.chip}
              />
            ))}
          </CardContent>
        </Card>
      </Grid>
    </Link>
  );
};
