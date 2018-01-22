include_directories(..)

set(WASMPOC_SOURCES
  ../ticket.cpp
)

add_executable(WasmPocTest
  ${WASMPOC_SOURCES}
  test_ticket.cpp
  test_main.cpp
)

add_test(NAME WASMPOC_TEST COMMAND WasmPocTest)
