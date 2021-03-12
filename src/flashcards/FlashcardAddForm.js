import React, { useState } from "react";
import { connect } from "react-redux";
import { createFlashcardRequest } from "./thunks";

const FlashcardAddForm = ({ collection, close, onSave }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  return (
    <>
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="space-y-6 sm:space-y-5">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Add Flashcard
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Please enter a question and an answer.
            </p>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="flashcard_question"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Question
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  type="text"
                  name="flashcard_question"
                  id="flashcard_question"
                  className="input-txt"
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="flashcard_answer"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Answer
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  type="text"
                  name="flashcard_answer"
                  id="flashcard_answer"
                  className="input-txt"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <div className="flex justify-end">
          <button
            onClick={(e) => {
              onSave(collection._id, { question, answer });
              setQuestion("");
              setAnswer("");
              close(e);
            }}
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSave: (collectionId, flashcard) =>
    dispatch(createFlashcardRequest(collectionId, flashcard)),
});

export default connect(null, mapDispatchToProps)(FlashcardAddForm);
