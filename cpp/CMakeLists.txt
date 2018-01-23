cmake_minimum_required(VERSION 3.6)

project(WasmPoc)

set(CMAKE_CXX_FLAGS "-std=c++1z -Wall -Wextra -Werror")

list(APPEND ASTYLE_ARGS
    --style=1tbs
    --lineend=linux
    --suffix=none
    --pad-oper
    --unpad-paren
    --break-closing-brackets
    --align-pointer=type
    --align-reference=type
    --indent-preproc-define
    --indent-switches
    --indent-col1-comments
    --keep-one-line-statements
    --keep-one-line-blocks
    --pad-header
    --convert-tabs
    --min-conditional-indent=0
    --indent=spaces=2
    --close-templates
    --add-brackets
    --break-after-logical
)

add_custom_target(
    format
    COMMAND astyle ${ASTYLE_ARGS} ${CMAKE_SOURCE_DIR}/*.h ${CMAKE_SOURCE_DIR}/*.cpp ${CMAKE_SOURCE_DIR}/test/*.cpp
    COMMENT "running astyle"
)

set(EMSCRIPTEN_FLAGS
    -O3
)
set(EMSCRIPTEN_JS_NAME wasm_poc.js)

set(EMSCRIPTEN_SRC
    simple.cpp
)

foreach(IN_FILE_NAME ${EMSCRIPTEN_SRC})
    string(REGEX REPLACE ".cpp\$" ".bc" OUT_FILE_NAME ${IN_FILE_NAME})
    set(IN_FILE "${CMAKE_CURRENT_SOURCE_DIR}/${IN_FILE_NAME}")
    set(OUT_FILE "${CMAKE_CURRENT_BINARY_DIR}/${OUT_FILE_NAME}")
    add_custom_command(
        OUTPUT ${OUT_FILE}
        DEPENDS ${IN_FILE}
        COMMAND em++ ${EMSCRIPTEN_FLAGS} ${IN_FILE} -o ${OUT_FILE}
        COMMENT "Running emscripten for ${IN_FILE_NAME}"
    )
    set(EMSCRIPTEN_BC ${OUT_FILE} ${EMSCRIPTEN_BC})
endforeach(IN_FILE_NAME)

add_custom_target(
    emscripten ALL
    DEPENDS ${EMSCRIPTEN_BC}
    COMMAND em++ ${EMSCRIPTEN_FLAGS} ${EMSCRIPTEN_BC} -o "${CMAKE_CURRENT_BINARY_DIR}/${EMSCRIPTEN_JS_NAME}"
    COMMENT "Linking ${EMSCRIPTEN_JS_NAME}"
)

enable_testing()

add_subdirectory(test)
