import React, { useState, forwardRef } from "react";

export const TitleInput = forwardRef(({ title, setTitle }, ref) => {
  // Local state for handling input value
  const [localTitle, setLocalTitle] = useState(title);

  return (
    <div className="w-full">
      <label htmlFor="title" className="mb-1 inline-block">
        Title
        <sup>*</sup>
      </label>
      <input
        ref={ref} // Forwarding ref to the input element
        id="title"
        type="text"
        className="w-full border bg-transparent px-2 py-2 outline-none"
        value={localTitle}
        onChange={(e) => setLocalTitle(e.target.value)} // Update local state on change
        onBlur={() => setTitle(localTitle)} // Update parent state on blur
      />
    </div>
  );
});

export const DescriptionInput = forwardRef(
  ({ description, setDescription }, ref) => {
    // Local state for handling textarea value
    const [localDescription, setLocalDescription] = useState(description);

    return (
      <div className="w-full">
        <label htmlFor="desc" className="mb-1 inline-block">
          Description
          <sup>*</sup>
        </label>
        <textarea
          ref={ref} // Forwarding ref to the textarea element
          id="desc"
          className="h-40 w-full resize-none border bg-transparent px-2 py-1 outline-none"
          value={localDescription}
          onChange={(e) => setLocalDescription(e.target.value)} // Update local state on change
          onBlur={() => setDescription(localDescription)} // Update parent state on blur
        ></textarea>
      </div>
    );
  }
);