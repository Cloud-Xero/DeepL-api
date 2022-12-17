import { Textarea, Group, Button, SimpleGrid } from "@mantine/core";
import { useForm } from "@mantine/form";

export const GetInTouchSimple = () => {
  const form = useForm({
    initialValues: {
      message: "",
    },
  });

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        console.log(values);
      })}
      action="/api/translate"
      method="post"
    >
      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <Textarea
          mt="md"
          placeholder="Please input sentence you want translate."
          maxRows={10}
          minRows={10}
          autosize
          name="message1"
          variant="filled"
          {...form.getInputProps("subject")}
        />
        <Textarea
          mt="md"
          placeholder=""
          maxRows={10}
          minRows={10}
          autosize
          name="message2"
          variant="filled"
          readOnly
        />
      </SimpleGrid>

      <Group position="center" mt="xl">
        <Button type="submit" size="md">
          Execute
        </Button>
      </Group>
    </form>
  );
};
