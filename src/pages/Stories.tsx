import { Button, Input } from "antd";

import { useState } from "react";
import { useCRUDStory } from "../hooks/useCRUDStory.ts";

const Stories = () => {
  const { list, add, remove, update } = useCRUDStory();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <div>

    
      <Input
        placeholder="Nhập title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input
        placeholder="Nhập author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      {list.map((item: any) => (
        <div key={item.id}>
          <p>{item.title} - {item.author}</p>

          <Button onClick={() => remove(item.id)}>Xóa</Button>

          <Button
            onClick={() =>
              update({
                id: item.id,
                title: title, 
                author: author,  
              })
            }
          >
            Sửa
          </Button>
        </div>
      ))}

      <Button
        onClick={() =>
          add({
            title,
            author,
          })
        }
      >
        Thêm
      </Button>
    </div>
  );
};

export default Stories;