CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'USER',
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE laveries (
  id SERIAL PRIMARY KEY,
  nom VARCHAR(150) NOT NULL,
  adresse TEXT,
  latitude NUMERIC,
  longitude NUMERIC,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE machines (
  id SERIAL PRIMARY KEY,
  laverie_id INTEGER REFERENCES laveries(id) ON DELETE CASCADE,
  type VARCHAR(50),
  status VARCHAR(50) DEFAULT 'AVAILABLE',
  cycle_time INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE reservations (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  machine_id INTEGER REFERENCES machines(id),
  start_time TIMESTAMP,
  end_time TIMESTAMP,
  status VARCHAR(50) DEFAULT 'PENDING',
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  reservation_id INTEGER REFERENCES reservations(id),
  amount NUMERIC(10,2),
  status VARCHAR(50) DEFAULT 'PENDING',
  method VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);