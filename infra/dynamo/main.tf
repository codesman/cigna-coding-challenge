resource "aws_dynamodb_table" "cigna-doctors" {
  name         = "cigna-doctors"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "name"

  attribute {
    name = "name"
    type = "S"
  }

  server_side_encryption {
    enabled = true
  }

  tags = {
    Name        = "dynamodb-cigna-doctors"
    Environment = "production"
  }
}

resource "aws_dynamodb_table_item" "doctor" {
  table_name = aws_dynamodb_table.cigna-doctors.name
  hash_key   = aws_dynamodb_table.cigna-doctors.hash_key
  for_each = {
    item1 = {
      name      = "Louis Pasteur"
      specialty = "Molecular Asymmetry"
    }
    item2 = {
      name      = "Dr. Jean-Martin Charcot"
      specialty = "Pathology"
    }
    item3 = {
      name      = "Dr. Edward Jenner"
      specialty = "Immunology"
    }
    item4 = {
      name      = "Dr. Andreas Vesalius"
      specialty = "Father of Modern Anatomy"
    }
    item5 = {
      name      = "Sir Joseph Lister"
      specialty = "Antiseptic Surgery"
    }
    item6 = {
      name      = "Hippocrates"
      specialty = "Father of Western Medicine"
    }
    item7 = {
      name      = "Sir William Osler"
      specialty = "Father of Modern Clinical Practice"
    }
  }
  item     = <<EOF
{
  "name": {"S": "${each.value.name}"},
  "specialty": {"S": "${each.value.specialty}"}
}
EOF
}
