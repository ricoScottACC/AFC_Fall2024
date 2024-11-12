package com.example.time_spent;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.flyway.FlywayMigrationStrategy;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TimeSpentApplication {

	public static void main(String[] args) {
		SpringApplication.run(TimeSpentApplication.class, args);
	}

	@Bean
	public FlywayMigrationStrategy cleanMigrateStrategy() {
		return flyway -> {
			flyway.baseline();
			flyway.repair();
			flyway.migrate();
		};
	}
}
