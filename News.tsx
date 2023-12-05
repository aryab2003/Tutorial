import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const generateRandomDate = () => {
  const startDate = new Date(2022, 0, 1); // Start date (Jan 1, 2022)
  const endDate = new Date(); // Current date
  const randomDate = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );
  return randomDate.toDateString();
};

const generateRandomNews = () => {
  const newsArticles = [];

  for (let i = 1; i <= 100; i++) {
    newsArticles.push({
      id: i,
      title: `Random News ${i}: ${Math.floor(Math.random() * 100000)}`, // Random title
      link: `/news/random-news-${i}`,
      publishedDate: generateRandomDate(),
    });
  }

  return newsArticles;
};

const News = () => {
  /*const newsArticles = [
    {
      id: 1,
      title: "Breaking News: Something Happened",
      link: "/news/breaking-news",
      publishedDate: "December 1, 2023",
    },
    {
      id: 2,
      title: "New Study Shows Interesting Results",
      link: "/news/new-study-results",
      publishedDate: "November 28, 2023",
    },
  ];
*/
  const newsArticles = generateRandomNews();
  return (
    <Flex direction="column" mt={16} p={4}>
      <Heading as="h2" size="lg" mb={4} color="white">
        Latest News
      </Heading>
      {newsArticles.map((article) => (
        <Box
          key={article.id}
          bg="white"
          p={14}
          rounded="lg"
          shadow="md"
          mt={50}
          // mb={20}
          color="black"
          opacity="70%"
        >
          <NextLink href={article.link} passHref>
            <Link
              fontSize="md"
              fontWeight="medium"
              _hover={{ textDecoration: "underline" }}
            >
              {article.title}
            </Link>
          </NextLink>
          <Text fontSize="sm" color="gray.500" mt={2}>
            Published on {article.publishedDate}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};

export default News;
