import { Title, Text } from '@mantine/core';

export default function HomePage() {
  return (
    <>
      <Title sx={{ fontSize: 100, fontWeight: 900, letterSpacing: -2 }} align="center" mt={100}>
        Blue Whale{' '}
        <Text inherit variant="gradient" component="span">
          Design
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        We don&apos;t only design, we search for food
      </Text>
    </>
  );
}
