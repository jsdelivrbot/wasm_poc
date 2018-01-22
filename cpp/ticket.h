#ifndef TICKET_H
#define TICKET_H

#include <vector>

class Ticket
{
public:
  explicit Ticket(std::vector<unsigned int> numbers) : numbers_(std::move(numbers)) {}

  std::size_t numberCount() const { return numbers_.size(); }

private:
  std::vector<unsigned int> numbers_;
};

#endif
