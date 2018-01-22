#include "catch/catch.hpp"

#include "ticket.h"

SCENARIO("Constructing new Ticket", "[Ticket]")
{
  GIVEN("A Ticket with 5 numbers") {
    Ticket t({23, 56, 12, 98, 35});

    THEN("numberCount() should return with 5") {
      REQUIRE(t.numberCount() == 5);
    }
  }
}
