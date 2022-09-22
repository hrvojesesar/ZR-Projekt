import React from "react";
import { MovieCard } from "card";
import { Grid, Title } from "@mantine/core";


const movies = [
    {
      title: "The Godfather",
      image:
        "https://www.themoviedb.org/t/p/original/3Tf8vXykYhzHdT0BtsYTp570JGQ.jpg",
    },
    {
      title: "The Godfather: Part II",
      image:
        "https://www.themoviedb.org/t/p/original/v3KCBeX0CBlZnHZndimm7taYqwo.jpg",
    },
    {
      title: "Pulp Fiction",
      image:
        "https://www.themoviedb.org/t/p/original/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg",
    },
    {
      title: "Goodfellas",
      image:
        "https://www.themoviedb.org/t/p/original/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    },
    {
      title: "Léon",
      image:
        "https://www.themoviedb.org/t/p/original/wHqGb8J6tXBVwjqWooGMtNEjs2A.jpg",
    },
    {
      title: "Gladiator",
      image:
        "https://www.themoviedb.org/t/p/original/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    },
    {
      title: "Braveheart",
      image:
        "https://www.themoviedb.org/t/p/original/or1gBugydmjToAEq7OZY0owwFk.jpg",
    },
    {
      title: "Shawshank Redemption",
      image: "https://www.themoviedb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    },
    {
      title: "Scarface",
      image:
        "https://www.themoviedb.org/t/p/original/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg",
    },
    {
      title: "Taxi Driver",
      image:
        "https://www.themoviedb.org/t/p/original/r2LX3653iPIl0LQlVFNMi3lhyHs.jpg",
    },
    {
      title: "Heat",
      image:
        "https://www.themoviedb.org/t/p/original/umSVjVdbVwtx5ryCA2QXL44Durm.jpg",
    },
    {
      title: "Die Hard",
      image:
        "https://www.themoviedb.org/t/p/original/pLjyTKKiY3LeSv10HGKn5nNSCfh.jpg",
    },
    {
      title: "The Wolf of Wall Street",
      image:
        "https://www.themoviedb.org/t/p/original/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg",
    },
    {
      title: "Casino",
      image:
        "https://www.themoviedb.org/t/p/original/4TS5O1IP42bY2BvgMxL156EENy.jpg",
    },
    {
      title: "There Will Be Blood",
      image:
        "https://www.themoviedb.org/t/p/original/fa0RDkAlCec0STeMNAhPaF89q6U.jpg",
    },
    {
      title: "The Last of the Mohicans",
      image:
        "https://www.themoviedb.org/t/p/original/fYVQRcgnOv998bKEplzrD3faGgt.jpg",
    },
    {
      title: "Schindler's List",
      image:
        "https://www.themoviedb.org/t/p/original/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    },
    {
      title: "Matrix",
      image:
        "https://www.themoviedb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    },
    {
      title: "No Country for Old Men",
      image:
        "https://www.themoviedb.org/t/p/original/bj1v6YKF8yHqA489VFfnQvOJpnc.jpg",
    },
    {
       title: "The Big Lebowski",
       image:
        "https://www.themoviedb.org/t/p/original/5DpmtMBXXNDujIuSlKW3WLKuqEd.jpg",
      },
    {
      title: "Of Mice and Men",
      image:
        "https://www.themoviedb.org/t/p/original/ApAGXal8CvRb4Q3qLPRIynRzyx5.jpg",
    },
    {
      title: "American History X",
      image:
        "https://www.themoviedb.org/t/p/original/c2gsmSQ2Cqv8zosqKOCwRS0GFBS.jpg",
    },
    {
      title: "Time of the Gypsies",
      image:
        "https://www.themoviedb.org/t/p/original/av6K9MX0jNNFAH6NZVrVV2DMAOA.jpg",
    },
    {
      title: "Underground",
      image:
        "https://www.themoviedb.org/t/p/original/h8N6y13t4VusrDdH5PzTkwvBvgN.jpg",
    },
    {
      title: "Fatal Attraction",
      image:
        "https://www.themoviedb.org/t/p/original/6QWziDIbcVVpnTGuaKjcxXC9Kl4.jpg",
    },
    {
      title: "The Big Blue",
      image:
        "https://www.themoviedb.org/t/p/original/81ogHyvZaDOMJWbUu8M3Nbosabz.jpg",
    },
    {
      title: "South Wind",
      image:
        "https://www.themoviedb.org/t/p/original/kEk3E6YMImiS4jAMNTEWt1Uojiq.jpg",
    },
    {
      title: "Midnight Run",
      image:
        "https://www.themoviedb.org/t/p/original/avLXoDhPPbKgdOU7wsoVlOzYfUP.jpg",
    },
    {
      title: "The Uncle",
      image:
        "https://www.themoviedb.org/t/p/original/5QikSbpbOZZ6TVYQCWkCftzmO6.jpg",
    },
    {
      title: "Blow",
      image:
        "https://www.themoviedb.org/t/p/original/yYZFVfk8aeMP4GxBSU9MTvqs9mJ.jpg",
    },
    {
      title: "Top Gun: Maverick",
      image:
        "https://www.themoviedb.org/t/p/original/mzshPc2MOuZg9lkLLlhjfaRdfTT.jpg",
    },
    {
      title: "Carlito's Way",
      image:
        "https://www.themoviedb.org/t/p/original/gFmTr2OJ8RCNAbWQh6maL00PY75.jpg",
    },
    {
      title: "A Bronx Tale",
      image:
        "https://www.themoviedb.org/t/p/original/sDbO6LmLYtyqAoFTPpRcMgPSCEO.jpg",
    },
    {
      title: "The Untouchables",
      image:
        "https://www.themoviedb.org/t/p/original/8BquGK22zCcsmBWiaIakaaPpSZb.jpg",
    },
    {
      title: "The Mask",
      image:
        "https://www.themoviedb.org/t/p/original/zJUvFtaGPQkcQYE8nmhU66ESpWe.jpg",
    },
    {
      title: "Dumb and Dumber",
      image:
        "https://www.themoviedb.org/t/p/original/4LdpBXiCyGKkR8FGHgjKlphrfUc.jpg",
    },
    {
      title: "On The Waterfront",
      image:
        "https://www.themoviedb.org/t/p/original/s8jFE0ADwR9CSTVMnMknWaBZztm.jpg",
    },
    {
      title: "Taken",
      image:
        "https://www.themoviedb.org/t/p/original/vzvMXMypMq7ieDofKThsxjHj9hn.jpg",
    },
    {
      title: "Batman",
      image:
        "https://www.themoviedb.org/t/p/original/m7duln89rO9o52x3l52ZGSFyGRG.jpg",
    },
    {
      title: "Joker",
      image:
        "https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    },
    {
      title: "Parasite",
      image:
        "https://www.themoviedb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    },
    {
      title: "Fuse",
      image:
        "https://www.themoviedb.org/t/p/original/u5nyYeEH4vADCypXaqRPZr6ilDk.jpg",
    },
    {
      title: "Enter The Dragon",
      image:
        "https://www.themoviedb.org/t/p/original/zN7OOSARMLVzl9xJqkW2CcZ3xhY.jpg",
    },
    {
      title: "Drunken Master",
      image:
        "https://www.themoviedb.org/t/p/original/r2QDb4m5xoM1jil3uXBxWJmKuto.jpg",
    },
    {
      title: "The Green Mile",
      image:
        "https://www.themoviedb.org/t/p/original/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    },
    {
      title: "Lucy",
      image:
        "https://www.themoviedb.org/t/p/original/4LAOvpe7JH2ksggSiDSmDs2aWOp.jpg",
    },
    {
      title: "Amelie",
      image:
        "https://www.themoviedb.org/t/p/original/oTKduWL2tpIKEmkAqF4mFEAWAsv.jpg",
    },
    {
      title: "Skyfall",
      image:
        "https://www.themoviedb.org/t/p/original/izrHg2UzxG3YXTBcKFaUbYp9LWA.jpg",
    },
    {
      title: "No Man's Land",
      image:
        "https://www.themoviedb.org/t/p/original/jRffyv5gaJb6Sna1S6UMRCPHuso.jpg",
    },
    {
      title: "Unforgiven",
      image:
        "https://www.themoviedb.org/t/p/original/yKyLJmRAtyXEEYKOvPhKHXIcPq9.jpg",
    },
  ];


  const MoviesContent = () => (
    <>
      <Title>Movies</Title>
      <Grid
        sx={{
          gap: "1rem",
        }}
      >
        {movies.map((movie) => (
          <MovieCard {...movie} key={movie.title} showAddButton />
        ))}
      </Grid>
    </>
  );


export default MoviesContent;