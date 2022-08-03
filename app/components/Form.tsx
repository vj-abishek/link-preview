import { Form, useTransition } from "@remix-run/react";

export default function FormComponent() {
  const transition = useTransition();

  return (
    <Form method="get" action="/preview" className="w-full m-10">
      <div className="w-full flex items-center justify-center">
        <input
          type="url"
          name="q"
          className="
                        rounded-l-md
                        border-gray-300
                        shadow-sm
                        w-2/5
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                        px-4
                        py-4
                      "
          placeholder="Enter the URL to preview"
          disabled={!!transition.submission}
          required
        />
        <button
          type="submit"
          disabled={!!transition.submission}
          className="inline-block px-7 py-5 bg-blue-800 text-white font-medium text-xs leading-tight uppercase rounded-r-md shadow-lg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          {transition.submission ? (
            <span>Loading...</span>
          ) : (
            <span>Check Website</span>
          )}
        </button>
      </div>
    </Form>
  );
}
