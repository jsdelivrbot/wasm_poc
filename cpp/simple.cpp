#include <emscripten.h>

extern "C" {

EMSCRIPTEN_KEEPALIVE
int simple()
{
  return 42;
}

}
