import { Button } from "@chakra-ui/react";

export default { title: "Chakra test" };

export const test2 = () => (
  <Button bg="primaryTeal.700" fontWeight="bold">I just consumed some ⚡️Chakra!</Button>
);
test2.story = {
  name: "Chakra test",
};
