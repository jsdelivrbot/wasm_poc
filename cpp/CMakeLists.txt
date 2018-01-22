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

enable_testing()

add_subdirectory(test)
